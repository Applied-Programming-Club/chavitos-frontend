// Enable client-side rendering - required for using React hooks like useState
'use client';

// Import useState hook from React to manage component state
import { useState } from 'react';

// TypeScript interface defining the structure of a queue member object
interface QueueMember {
  id: number;               // Unique identifier for each queue member
  firstName: string;        // Member's first name (e.g., "John")
  lastInitial: string;      // Last initial of member (e.g., "D" from "Doe")
  joinedTime: Date;         // Timestamp showing when member joined the queue
}

export default function QueuePage() {
  // ========== STATE VARIABLES ==========
  // Form state for capturing user's full name
  const [userName, setUserName] = useState('');                    // Stores the full name input from the user during form entry
  const [userFirstName, setUserFirstName] = useState('');          // Stores just the first name after parsing
  const [userLastInitial, setUserLastInitial] = useState('');      // Stores just the last initial after parsing
  
  // Queue and UI state
  const [isInQueue, setIsInQueue] = useState(false);               // Boolean flag: tracks whether current user is in the queue
  const [showAddForm, setShowAddForm] = useState(false);           // Boolean flag: controls visibility of the add-to-queue form modal
  const [formError, setFormError] = useState('');                  // Stores error message for form validation feedback to the user
  
  // Queue list with dummy initial data for demonstration
  const [queueList, setQueueList] = useState<QueueMember[]>([
    // Dummy member 1: joined 15 minutes ago
    { id: 1, firstName: 'John', lastInitial: 'D', joinedTime: new Date(Date.now() - 15 * 60000) },
    // Dummy member 2: joined 10 minutes ago
    { id: 2, firstName: 'Jane', lastInitial: 'S', joinedTime: new Date(Date.now() - 10 * 60000) },
    // Dummy member 3: joined 5 minutes ago
    { id: 3, firstName: 'Mike', lastInitial: 'J', joinedTime: new Date(Date.now() - 5 * 60000) },
  ]);

  // ========== EVENT HANDLER: Process name form submission ==========
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();                                    // Prevent default form submission (page reload)
    
    // Validate: return early if name is empty or only whitespace
    if (!userName.trim()) {
      setFormError('Please enter your name');            // Set error message for user feedback
      return;
    }

    // Parse the user's input name to extract first name and last initial
    const nameParts = userName.trim().split(' ');         // Split the full name by spaces
    const firstName = nameParts[0];                        // First part is the first name
    // Get the first letter of the last part (or empty string if no last name provided)
    const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0).toUpperCase() : '';

    // Check if user already exists in queue
    const userExists = queueList.some(member => member.firstName === firstName && member.lastInitial === lastInitial);
    if (userExists) {
      setFormError('You are already in the queue');       // Notify user they're already queued
      return;
    }

    // Update state with the parsed name components
    setUserFirstName(firstName);                          // Save first name
    setUserLastInitial(lastInitial);                      // Save last initial

    // Create a new queue member object with the user's info
    const newMember: QueueMember = {
      id: Math.max(...queueList.map(m => m.id), 0) + 1, // Generate unique ID (max current ID + 1)
      firstName: firstName,                              // Use the parsed first name
      lastInitial: lastInitial,                          // Use the parsed last initial
      joinedTime: new Date(),                            // Record the current time as join time
    };
    // Add the new member to the queue list
    setQueueList([...queueList, newMember]);
    // Update state to mark that the user is now in the queue
    setIsInQueue(true);
    // Clear the form and close it
    setUserName('');
    setFormError('');                                     // Clear any previous error messages
    setShowAddForm(false);
  };

  // ========== EVENT HANDLER: Remove user from queue ==========
  const handleRemoveFromQueue = () => {
    // Filter out the current user from the queue list by matching name
    const updatedQueue = queueList.filter(member => !(member.firstName === userFirstName && member.lastInitial === userLastInitial));
    setQueueList(updatedQueue);                          // Update queue state with filtered list
    setIsInQueue(false);                                 // Mark user as no longer in queue
    setUserFirstName('');                                // Clear user name state
    setUserLastInitial('');
  };

  // ========== UTILITY FUNCTION: Calculate estimated wait time based on queue position ==========
  const calculateEstimatedWaitTime = (position: number): string => {
    // Calculate estimated wait time: each position takes approximately 5 minutes
    const estimatedMinutes = position * 5;
    // Calculate hours from total minutes
    const hours = Math.floor(estimatedMinutes / 60);
    // Get remaining minutes after calculating hours
    const minutes = estimatedMinutes % 60;
    
    // Return formatted wait time string for display
    if (hours > 0) {
      return `${hours}h ${minutes}m`;                     // Show both hours and remaining minutes
    }
    return `${minutes}m`;                                // Show only minutes if less than 1 hour
  };

  // ========== DERIVED STATE: Calculate current user's queue information ==========
  // Find the queue member object that matches the current user (by first name and last initial)
  const userQueueMember = queueList.find(
    member => member.firstName === userFirstName && member.lastInitial === userLastInitial
  );

  // Calculate the user's position in the queue (1-indexed position, or null if not in queue)
  const userPosition = userQueueMember ? queueList.indexOf(userQueueMember) + 1 : null;

  // ========== MAIN RENDER: Display queue management interface ==========
  return (
    // Container: full-height screen with clean white background
    <div className="min-h-screen bg-white">
      {/* Header section: displays title and positioning */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Chavitos Queue</h1>
          {/* Subtitle: provides context about what the user is viewing */}
          <p className="mt-2 text-sm text-gray-600">Current position and wait times</p>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* USER STATUS SECTION: Display current user's position if they're in queue */}
        {isInQueue && userPosition && (
          <div className="mb-10 p-6 sm:p-8 bg-blue-50 border border-blue-200 rounded-lg">
            {/* User name display: shows user's name in a more prominent way */}
            <div className="mb-4">
              <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">Your Position</p>
              <p className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
                {userFirstName} {userLastInitial}.
              </p>
            </div>
            
            {/* Position and wait time info: displayed in a grid for clarity */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div>
                <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">Position</p>
                <p className="mt-1 text-2xl sm:text-3xl font-semibold text-blue-600">#{userPosition}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">Estimated Wait Time</p>
                <p className="mt-1 text-2xl sm:text-3xl font-semibold text-blue-600">
                  {calculateEstimatedWaitTime(userPosition)}
                </p>
              </div>
            </div>

            {/* Remove button: allows user to leave the queue */}
            <button
              onClick={handleRemoveFromQueue}
              className="mt-6 w-full px-4 py-2 text-sm font-medium text-red-700 bg-white border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
            >
              Leave Queue
            </button>
          </div>
        )}

        {/* QUEUE LIST SECTION: Display all people currently in queue */}
        <div className="mb-8">
          {/* Section header with count */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              People in Queue
              {/* Display count of people waiting */}
              <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                {queueList.length}
              </span>
            </h2>
          </div>

          {/* Queue list: render each person's entry */}
          {queueList.length === 0 ? (
            // Empty state message: shown when no one is in queue
            <div className="text-center py-12">
              <p className="text-gray-600">Queue is empty</p>
            </div>
          ) : (
            // List of queue members: display each person with their position and wait time
            <div className="space-y-3">
              {queueList.map((member, index) => {
                // Check if this is the current user for conditional styling
                const isCurrentUser = member.firstName === userFirstName && member.lastInitial === userLastInitial;
                
                return (
                  <div
                    key={member.id}
                    // Apply different styling for the current user vs other queue members
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-lg border transition-colors ${
                      // If this member is the current user, apply blue highlighting
                      isCurrentUser
                        ? 'bg-blue-50 border-blue-200'  // Current user: light blue background
                        : 'bg-white border-gray-200 hover:border-gray-300'  // Others: white with subtle hover
                    }`}
                  >
                    {/* Left section: position number and name */}
                    <div className="flex items-center gap-4">
                      {/* Position badge: shows queue order */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold text-sm">
                        {index + 1}
                      </div>
                      {/* Member name: larger for current user */}
                      <div>
                        <p
                          className={`font-medium ${
                            isCurrentUser
                              ? 'text-2xl text-gray-900'  // Current user: larger, darker text
                              : 'text-base text-gray-900'  // Others: standard size
                          }`}
                        >
                          {member.firstName} {member.lastInitial}.
                        </p>
                        {/* User indicator badge: shows if this is the current user */}
                        {isCurrentUser && (
                          <p className="text-xs text-blue-600 font-medium mt-1">You</p>
                        )}
                      </div>
                    </div>

                    {/* Right section: wait time */}
                    <div className="text-right">
                      {/* Wait time label */}
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">Wait Time</p>
                      {/* Estimated wait time value based on queue position */}
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {calculateEstimatedWaitTime(index + 1)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ADD TO QUEUE SECTION: Button to join the queue */}
        {!isInQueue ? (
          <div className="mt-10">
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Queue
            </button>
          </div>
        ) : null}

        {/* ADD TO QUEUE MODAL: Form for joining the queue */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            {/* Modal container: centered card with form */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
              {/* Modal title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Join the Queue</h3>
              {/* Modal subtitle: explains what information is needed */}
              <p className="text-sm text-gray-600 mb-6">Enter your name to join the queue</p>

              {/* Form for submitting name */}
              <form onSubmit={handleNameSubmit} className="space-y-4">
                {/* Name input field */}
                <div>
                  {/* Label for the input field */}
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {/* Input: collects user's full name */}
                  <input
                    id="name"
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);        // Update name state on input change
                      setFormError('');                   // Clear error message when user starts typing
                    }}
                    placeholder="John Smith"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus  // Automatically focus this input when modal opens
                  />
                  {/* Error message: displayed if form validation fails */}
                  {formError && (
                    <p className="mt-2 text-sm text-red-600">{formError}</p>
                  )}
                </div>

                {/* Form action buttons: submit and cancel */}
                <div className="flex gap-3 mt-6">
                  {/* Submit button: adds user to queue */}
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join
                  </button>
                  {/* Cancel button: closes the modal without submitting */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false);              // Close the modal
                      setFormError('');                   // Clear any error messages
                      setUserName('');                    // Clear the form input
                    }}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

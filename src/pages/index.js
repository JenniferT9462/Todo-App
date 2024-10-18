
export default function SplashPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Your Planner</h1>
      <p className="text-lg text-gray-200 mb-8">Organize your tasks, set goals, and stay on top of your schedule.</p>
      <a href="/todo-app" className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-md">
        Get Started
      </a>
    </div>
  );
}

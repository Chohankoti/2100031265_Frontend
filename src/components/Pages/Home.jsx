import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  // Replace 'YOUR_GOOGLE_DRIVE_VIDEO_LINK' with your actual Google Drive video link
  const googleDriveVideoUrl = 'https://drive.google.com/file/d/168Dg4euGRub-SKnNDGzspNKwbBJtfsfe/view?usp=sharing';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg mb-6">
        I am a passionate student who is an expert and has achievements in frontend technologies such as React and React Native. I am also a Google Semi-Finalist in which I developed an app for small and marginal farmers.
      </p>
      {/* Live Demo link */}
      <h2 className="text-2xl font-bold mb-4">Live Demo for this Website</h2>
      <div className="mb-6 flex flex-row">
        <div>
          <p className="text-lg mr-3">Live Demo:</p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/168Dg4euGRub-SKnNDGzspNKwbBJtfsfe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
           ( Link )
          </a>
        </div>
      </div>
      {/* Portfolio link */}
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="mb-6 flex flex-row">
        <div>
          <p className="text-lg mr-3">My Portfolio:</p>
        </div>
        <div>
          <a
            href="https://chohanportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            ( Link )
          </a>
        </div>
      </div>

      {/* GitHub activity calendar heading */}
      <h2 className="text-2xl font-bold mb-4">GitHub Activity 540+ contributions</h2>
      <div className="max-w-2xl mx-auto">
        {/* GitHub activity calendar */}
        <GitHubCalendar username="Chohankoti" />
      </div>
    </div>
  );
}

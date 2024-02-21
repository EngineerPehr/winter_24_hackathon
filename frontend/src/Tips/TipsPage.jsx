import React from "react";
import ImagePage from "./ImagePage";
import sleep1 from "./Images/sleep1.jpg";
import sleep2 from "./Images/sleep2.jpg";
import sleep3 from "./Images/sleep3.jpg";
import sleep4 from "./Images/sleep4.jpg";
import fitness1 from "./Images/fitness1.jpg";
import fitness2 from "./Images/fitness2.jpg";
import fitness3 from "./Images/fitness3.jpg";
import fitness4 from "./Images/fitness4.jpg";
import meditation1 from "./Images/meditation1.jpg";
import meditation2 from "./Images/meditation2.jpg";
import meditation3 from "./Images/meditation3.jpg";
import meditation4 from "./Images/meditation4.jpg";

export default function TipsPage() {
  const sleepDisorderImages = [
    {
      title: "Sleep Disorders Guide",
      images: [
        { src: "sleep1", alt: "Image 1", description: "Personalize Your Sleep Routine" },
        { src: "sleep2", alt: "Image 2", description: "Common Sleep Disorders" },
        { src: "sleep3", alt: "Image 3", description: "Consult With A Licensed Sleep Specialist" },
        { src: "sleep4", alt: "Image 4", description: "Sleep Disorder Self Help Modules" },
      ],
    },
  ];

    const physicalFitnessImages = [
    {
      title: "Physical Fitness Guide",
      images: [
        { src: "fitness1", alt: "Image 1", description: "Select A Workout Plan That Fits Your Needs" },
        { src: "fitness2", alt: "Image 2", description: "The Link Between Physical Activity and Mental Health" },
        { src: "fitness3", alt: "Image 3", description: "Find Local Trails and Parks" },
        { src: "fitness4", alt: "Image 4", description: "Nutrition Tips and Mindful Meals" },
      ],
    },
  ];

  const meditationRelaxationImages = [
    {
      title: "Meditation & Relaxation Guide",
      images: [
        { src: "meditation1", alt: "Image 1", description: "Meditation Techniques" },
        { src: "meditation2", alt: "Image 2", description: "Setup Deep Breathing Reminders" },
        { src: "meditation3", alt: "Image 3", description: "In Depth Mood Tracker" },
        { src: "meditation4", alt: "Image 4", description: "Sights & Sounds for A Better Night's Sleep" },
      ],
    },
  ];
console.log('images.src.value')
  return (
    <div>
      <ImagePage title="Sleep Disorders Guide" images={sleepDisorderImages} />
      <ImagePage title="Physical Fitness Guide" images={physicalFitnessImages} />
      <ImagePage title="Meditation & Relaxation Guide" images={meditationRelaxationImages} />
    </div>
  )
}
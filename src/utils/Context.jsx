import React, { createContext, useState } from "react";

export const eventContext = createContext();

const Context = (props) => {
  const events = [
    {
      id: 0,
      name: "Maanik Pole Dance",
      time: "09:00 AM",
      date: "28th Feb",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1611424564096-3b8838e8438b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvbGUlMjBkYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      details: [
        "Pole dance has to be done by maanik only",
        "he can use more than one pole",
      ],
    },
    {
      id: 1,
      time: "09:00 AM",
      date: "28th Feb",
      name: "Sapphire Yoga Retreat",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1623809186074-425238f63b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2ElMjByZXRyZWF0fGVufDB8fDB8fA%3D%3D",
      details: [
        "Yoga retreat with calming sapphire-themed ambiance",
        "Daily yoga sessions with experienced instructors",
      ],
    },
    {
      id: 2,
      time: "09:00 AM",
      date: "28th Feb",
      name: "Cosmic Cooking Class",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1574637308153-1f2205f9d91e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpbmclMjBjbGFzcyUyMGltYWdlfGVufDB8fDB8fA%3D%3D",
      details: [
        "Learn to cook cosmic-themed dishes with professional chefs",
        "Hands-on experience in a state-of-the-art kitchen",
      ],
    },
    {
      id: 3,
      time: "09:00 AM",
      date: "28th Feb",
      name: "Adventure Trek Expedition",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1593230216465-d362f8965f7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkdmVudHVyZSUyMHRyZWtfZXBleGl0aW9ufGVufDB8fDB8fA%3D%3D",
      details: [
        "Challenging trek through scenic mountain trails",
        "Professional guides and camping under the stars",
      ],
    },
    {
      id: 4,
      time: "09:00 AM",
      date: "28th Feb",
      name: "Zen Garden Meditation",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1594995994661-dfe76fd4292f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHplbiUyMGdhcmRlbiUyMG1lZGltaXRpb258ZW58MHx8MHx8",
      details: [
        "Meditation sessions in a tranquil Zen garden",
        "Guided meditation by experienced practitioners",
      ],
    },
    {
      id: 5,
      time: "09:00 AM",
      date: "28th Feb",
      name: "Artistic Pottery Workshop",
      category: "Technical",
      image:
        "https://images.unsplash.com/photo-1565299582-5806c1e9b3f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvdHRlcnklMjB3b3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      details: [
        "Create unique pottery pieces with expert potters",
        "Express yourself through the art of pottery",
      ],
    },
    {
      id: 6,
      time: "09:00 AM",
      date: "28th Feb",
      category: "Technical",
      name: "Digital Music Production",
      image:
        "https://images.unsplash.com/photo-1551902331-31988bb7eead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRpZ2l0YWwlMjBtdXNpYyUyMHBvcHVlfGVufDB8fDB8fA%3D%3D",
      details: [
        "Learn the art of digital music production",
        "Hands-on experience with professional software",
      ],
    },
    {
      id: 7,
      time: "09:00 AM",
      category: "Technical",
      date: "28th Feb",
      name: "Culinary World Tour",
      image:
        "https://images.unsplash.com/photo-1611237166641-17a78971885e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGN1bGFubnl8ZW58MHx8MHx8",
      details: [
        "Embark on a culinary journey around the world",
        "Master the art of international cuisine",
      ],
    },
    {
      id: 8,
      time: "09:00 AM",
      category: "Cultural",
      date: "28th Feb",
      name: "Culinary World Tour",
      image:
        "https://images.unsplash.com/photo-1611237166641-17a78971885e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGN1bGFubnl8ZW58MHx8MHx8",
      details: [
        "Embark on a culinary journey around the world",
        "Master the art of international cuisine",
      ],
    },
    {
      id: 9,
      time: "09:00 AM",
      category: "Cultural",
      date: "28th Feb",
      name: "Culinary World Tour",
      image:
        "https://images.unsplash.com/photo-1611237166641-17a78971885e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGN1bGFubnl8ZW58MHx8MHx8",
      details: [
        "Embark on a culinary journey around the world",
        "Master the art of international cuisine",
      ],
    },
    {
      id: 10,
      time: "09:00 AM",
      category: "Sports",
      date: "28th Feb",
      name: "Culinary World Tour",
      image:
        "https://images.unsplash.com/photo-1611237166641-17a78971885e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGN1bGFubnl8ZW58MHx8MHx8",
      details: [
        "Embark on a culinary journey around the world",
        "Master the art of international cuisine",
      ],
    },
  ];

  const [eventData, setEventData] = useState(events);

  return (
    <eventContext.Provider value={{ eventData, setEventData }}>
      {props.children}
    </eventContext.Provider>
  );
};

export default Context;

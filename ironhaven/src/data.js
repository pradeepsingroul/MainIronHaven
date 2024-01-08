import { SiOpenaigym } from 'react-icons/si'
import afterHover from './images/afterHover.jpg'
import afterHover2 from './images/afterHover2.jpg'
import afterHover3 from './images/afterHover3.jpg'
import afterHover4 from './images/afterHover4.jpg'
import afterHover5 from './images/afterHover5.jpg'


export const routes = [
  { path: "/", component: "Home" },
  { path: "/about", component: "About" },
  { path: "/gallery", component: "Gallery" },
  { path: "/trainers", component: "Trainers" },
  { path: "/plans", component: "Plans" },
  { path: "/contact", component: "Contact" },
]

export const programs = [
  {
    id: 3,
    date: "12",
    months: "Feb",
    title: "Strength Builder",
    info: "Take your strength to new heights with our 12-week Strength Builder program. Tailored for individuals seeking muscle development and increased power, this program combines intense strength training, targeted muscle workouts, and specialized exercises.",
    path: "/programs/333"
  },
  {
    id: 4,
    date: "01",
    months: "Mar",
    title: "Cardio Blast",
    info: "Ignite your cardiovascular fitness with our Cardio Blast program. Over 12 weeks, experience a dynamic mix of high-intensity cardio workouts, endurance training, and heart-pumping exercises designed to boost your overall cardiovascular health.",
    path: "/programs/444"
  },
  {
    id: 5,
    date: "09",
    months: "Dec",
    title: "Lean Muscle Sculpt",
    info: "Sculpt and define your physique with our Lean Muscle Sculpt program. This 12-week journey focuses on building lean muscle, enhancing muscle definition, and achieving a well-toned body through a combination of targeted workouts and strength training.",
    path: "/programs/555"
  },
  {
    id: 6,
    date: "22",
    months: "Apr",
    title: "Total Body Transformation",
    info: "Embark on a total body transformation with our 12-week program. This comprehensive program integrates full-body workouts, strength training, and customized exercises to help you achieve a well-balanced and transformed physique.",
    path: "/programs/666"
  }
];


export const faqs = [
  {
    question: "What are your gym's operating hours?",
    answer: "Our gym is open from [start time] to [end time] every day. We are also open on weekends. Check our 'Hours of Operation' page for more details.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer: "Yes, we provide personal training sessions with certified trainers. You can learn more about our personal training programs on our 'Personal Training' page.",
  },
  {
    question: "Can I bring a guest to the gym?",
    answer: "Yes, members can bring guests to the gym. We may have specific guest policies, so please check with our staff or refer to our 'Membership Policies' page for details.",
  },
  {
    question: "What types of classes do you offer?",
    answer: "We offer a variety of classes, including [list types of classes, e.g., yoga, spinning, strength training]. Check our 'Class Schedule' page for the current schedule and class descriptions.",
  },
  {
    question: "How do I sign up for a membership?",
    answer: "You can sign up for a membership by visiting our gym in person or through our online registration system. Refer to our 'Membership Plans' page for details on available plans and pricing.",
  },
  {
    question: "Is there a cancellation fee for memberships?",
    answer: "Cancellation fees may apply based on the terms of your membership agreement. Please review our 'Membership Policies' for information on cancellation fees and procedures.",
  },
  {
    question: "Do you have locker room facilities?",
    answer: "Yes, we have locker rooms with shower facilities for members. Lockers are available for daily use or rental. More details can be found on our 'Facilities' page.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you may be able to freeze your membership under certain circumstances. Contact our membership services for information on freezing your membership and any associated fees.",
  },
  {
    question: "What equipment do you have in your gym?",
    answer: "Our gym is equipped with a range of fitness machines, free weights, and cardio equipment. You can find a detailed list on our 'Equipment' page.",
  },
  {
    question: "How do I contact your customer support?",
    answer: "You can reach our customer support team by phone at [phone number] or by email at [email address]. Our support hours are [mention hours/days of operation].",
  },
];


export const testimonials_data = [
  {
    id: 1,
    image: afterHover,
    name: "Emily Johnson",
    position: "Yoga Enthusiast",
    quotes: "I am genuinely amazed by the fantastic workouts and the incredibly friendly atmosphere at FitZone. The variety in exercises keeps me engaged, and the supportive community makes every session enjoyable. I can't express enough how much I love it!"
  },
  {
    id: 2,
    image: afterHover2,
    name: "Alex Turner",
    position: "Fitness Freak",
    quotes: "The transformation I've experienced at PowerFit Gym is nothing short of extraordinary. The results speak volumes about the dedication of both the trainers and the entire fitness community. I am thrilled with my progress, and the journey has been truly incredible!"
  },
  {
    id: 3,
    image: afterHover3,
    name: "Lisa Williams",
    position: "Wellness Advocate",
    quotes: "BodyRevive is more than just a gym; it's a haven of fitness excellence. The trainers are not only knowledgeable but also inspiring, pushing me beyond my limits. The state-of-the-art equipment and personalized guidance have made my fitness journey remarkable. I highly recommend it to anyone seeking an amazing experience!"
  },
  {
    id: 4,
    image: afterHover4,
    name: "Chris Anderson",
    position: "Health Explorer",
    quotes: "ProActive Fitness has been the catalyst for an incredible transformation in my life. The trainers have not only helped me achieve my fitness goals but also provided valuable insights into holistic well-being. It's truly a game-changer, and I'm grateful for the extraordinary support!"
  },
  {
    id: 5,
    image: afterHover5,
    name: "Jessica Smith",
    position: "Strength Enthusiast",
    quotes: "CoreStrength Gym has set the bar high with its top-notch facilities and expert guidance. The journey towards a healthier lifestyle has been seamless, thanks to the well-planned workouts and personalized attention. This gym deserves nothing less than a 5-star rating for its commitment to excellence!"
  }
];

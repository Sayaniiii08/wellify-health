import FeatureCard from '../components/FeatureCard';
import healthGif from '../assets/healthapp.gif';
import chartGif from '../assets/chart.gif';
import calenderGif from '../assets/calender.gif';


function Features() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">WELLIFY Features</h1>
      <div className="row g-4">
        <FeatureCard
          icon="bi-calendar-check"
          title="Daily Health Goals"
          text="Set and complete daily goals like water intake, sleep hours, and physical activity. Stay consistent with streaks and reminders."
          image={calenderGif}
        />
        <FeatureCard
          icon="bi-heart-pulse"
          title="Common Health Measures"
          text="Track essential metrics like BMI, heart rate, calorie consumption, and temperature through smart integrations."
          image={healthGif}
        />
        <FeatureCard
          icon="bi-bar-chart-line"
          title="Wellness Analytics"
          text="Visualize trends over time with easy-to-read charts. Get personalized feedback using AI-driven insights."
          image={chartGif}
        />
      </div>
    </div>
  );
}
export default Features;

import "../App.css";
import HeroLogo from "../assets/images/hero-logo.svg";
const Contact = () => {
  return (
    <div className="hero-bg flex flex-col">
      <img src={HeroLogo} alt="Hero Logo" width={77} height={77} />
      <h2 className="font-medium text-[48px] leading-[72px]">Contact</h2>
      <h3 className="font-medium text-[20px] leading-[24px]">
        Home{" "}
        <span className="font-light text-[20px] leading-[24px]">Contact</span>
      </h3>
    </div>
  );
};

export default Contact;

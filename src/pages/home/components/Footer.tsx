import thankyouCatImg from "@/assets/imgs/home/thankyouCat.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-8">
        <img
          src={thankyouCatImg}
          alt="Thank You Cat"
          className="w-[300px] object-contain"
        />
        {/* Thank You Message */}
        <h1 className="text-heading-l text-accent text-center bg-secondary px-2 py-1">
          THANK YOU
        </h1>
        {/* Copyright */}
        <div className="text-meta text-on-primary text-center space-y-2">
          <p>© {currentYear} letYuchan. All rights reserved.</p>
          <p className="text-body text-on-primary">
            Built with care, curiosity, and persistence. If that resonates with
            you, I’d love to work together
          </p>
        </div>
        {/* CTA Button */}
        <button className="group relative px-8 py-4 text-heading-s font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-accent opacity-100 group-hover:opacity-90 transition-opacity" />

          {/* Animated Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          {/* Button Text */}
          <span className="relative z-10 text-heading-m text-primary font-bold">
            Contact
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

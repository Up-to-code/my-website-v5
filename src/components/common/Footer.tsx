interface FooterProps {
    // ...props
  }
  
  const Footer = ({ }: FooterProps) => {
    return (
      <footer >
        <div className="container mx-auto px-4 py-8 text-center font-bold">
          <p>&copy; <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#FF5656]">Ahmed Mansour</span> 2024</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
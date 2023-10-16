import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";
const Contact = () => {
  return (
    <>
      <div className="grid m-auto h-auto gap-2 lg:pt-36 bg-white justify-center items-center px-5  pb-0 lg:pb-10">
        <div className="w-[100%] h-auto md:w-[100%] lg:w-[900px]  p-5 m-5">
          <ContactInfo />
        </div>

        <div className="w-[100%] h-auto md:w-[100%] lg:w-[900px]  p-5 m-5">
          <ContactForm />
        </div>
      </div>
      <GoogleMap />
    </>
  );
};
export default Contact;

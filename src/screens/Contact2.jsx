import Iframe from "react-iframe";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className="flex w-full m-auto h-[100%] lg:h-[100%] bg-green-500 justify-center items-start px-5 pb-10">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10 lg:py-40">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.649939402856!2d-106.21955571156425!3d31.780032367488346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e746dd7ad5c30f%3A0x70bc86e4dd31ed2!2s2712%20Tierra%20Murcia%20St%2C%20El%20Paso%2C%20TX%2079938!5e0!3m2!1sen!2sus!4v1686562253152!5m2!1sen!2sus"
          styles={{
            width: "600px",
            height: "450px",
            backgroundColor: "#0099FF",
          }}
          id=""
          position="relative"
          // allowfullscreen=""
          // allow="fullscreen"
          frameborder="0"
          loading="lazy"
          //referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="grid w-[100%] h-auto md:w-[90%] lg:w-[400px]  p-5 m-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;

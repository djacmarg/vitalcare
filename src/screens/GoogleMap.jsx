import Iframe from "react-iframe";

const GoogleMap = () => {
  return (
    <div>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.65010324434!2d-106.2146848!3d31.7800279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e746dd7ad5c30f%3A0x70bc86e4dd31ed2!2s2712%20Tierra%20Murcia%20St%2C%20El%20Paso%2C%20TX%2079938%2C%20USA!5e0!3m2!1sen!2s!4v1694944411238!5m2!1sen!2s"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </div>
  );
};

export default GoogleMap;

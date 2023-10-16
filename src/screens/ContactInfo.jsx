const ContactInfo = () => {
  return (
    <div className="flex pl:0 md:pl-10 lg:pl-10 w-full m-auto h-auto lg:h-auto justify-center items-center py-0 transition-all duration-700">
      <div className="grid lg:m-auto gap-2 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-0 text-2xl">
        <h6>LOCATION ADDRESS</h6>
        <p>2712 Tierra Murcia St El Paso Texas, 79938</p>

        <h6>CONTACT ADDRESS</h6>
        <p>
          Phone: +1 915-955-2238 <br />
          Email: info@vitcarellc.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;

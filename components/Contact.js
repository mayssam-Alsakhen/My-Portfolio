export default function Contact() {
  return (
    <div > 
      <h1 id="contact" className="text-center py-3 text-5xl font-bold text-primary">
        Contact me
      </h1>
      <div className=" w-[80%] rounded-3xl mx-auto bg-[#fdf5ee]">
        <div className="flex flex-col w-full h-full rounded-3xl  border-2 border-basic ">
          <form className="w-3/5 m-auto flex flex-col justify-around">
              <input
                name="Name"
                placeholder="Name"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Email"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <input
                name="Name"
                placeholder="Subject"
                className="h-9 outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"
              />
              <textarea placeholder="Message" rows={6} className="outline-none placeholder:text-basic p-1 bg-gradient-to-r from-primary via-red-200 to-primary mb-3"/>
          </form>
            <button>submit</button>
        </div>
      </div>
    </div>
  );
}

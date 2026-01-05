
function StayProductive() {
  return (
    <section className="bg-[var(--color-navy-900)] pb-[100px]">
       <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
         <div>
            <img src="/src/assets/images/illustration-stay-productive.png" alt="stay-productive.png" />
        </div>
        <div className="text-white">
            <h3 className="text-[24px] md:text-[40px] font-semibold leading-[50px]">
            Stay productive,
            <br className="hidden md:block"/> wherever you are
            </h3>
            <div className="my-[15px] font-normal text-sm tracking-[1.2px]">
                <p className="mb-[15px]">
                Never let location be an issue when accessing your files. Fylo has you 
                <br className="hidden md:block"/> covered for all of your file storage needs.
                </p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <a href="/" className="text-[var(--color-teal-200)] hover:text-[var(--color-cyan-500)] border-b-2 border-[var(--color-teal-200)] border-solid pb-[5px] flex items-center gap-[15px] w-fit transition-colors duration-200">
            See how Fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arrow-img"
            className="w-[20px] h-[20px] object-contain animate-move-right"
            />
            </a>
        </div>
       </div>
    </section>
  )
}

export default StayProductive ;



function TestimonialsBox({name,image,desc,position}) {
  return (
    <div className="text-white bg-[var(--color-navy-800)] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_var(--color-navy-850)]">
        <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
        <div className="flex items-center gap-[15px]">
            <img 
                src={`/src/assets/images/${image}`}
                className="w-[50px] h-[50px] rounded-full object-contain"
        />
          <div>
            <strong className="block md-[5px]">{name}</strong>
            <p className="font-normal text-sm">{position}</p>
          </div>
        </div>
    </div>
  )
}

export default TestimonialsBox
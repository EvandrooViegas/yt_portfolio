export default function useAnimation(target, className, options) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                target.classList.add(className)
            }
        })
    }, options ? options : {  })
    observer.observe(target)
}
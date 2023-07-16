import { styles } from "../styles"

const SectionWrapper = (Component,idName) => 
function HOC (){
    return (
        <section className={`${styles.paddingSection}
        max-w-7xl mx-auto relative z-0` }>
        <span className='hash-span' id={idName}>
          &nbsp;{console.log(idName)}
        </span>
            <Component/>
         </section>
    )
}

export default SectionWrapper
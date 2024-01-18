// css
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';



export default function BirthControlOptions() {

  
  return (
    <>
      <div>
        <h1 className={styles.heading}>birth control, for you.</h1>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.optionItem}>
				<Link to='/iud'>
          <img
            src='src/images/iud.png'
            alt='IUD'
            className={styles.iudImage}
          />
					</Link>
          <p className={styles.optionName}>IUD</p>
        </div>

	
				<div className={styles.optionItem}>
				<Link to='/patch'>
          <img
            src='src/images/patch.png'
            alt='Patch'
            className={styles.patchImage}
          />
					</Link>
          <p className={styles.optionName}>THE PATCH</p>
        </div>

        <div className={styles.optionItem}>
				<Link to='/nuvaRing'>
          <img
            src='src/images/nuvaring.png'
            alt='Nuvaring'
            className={styles.patchImage}
          />
					</Link>
          <p className={styles.optionName}>NUVARING</p>
        </div>


        <div className={styles.optionItem}>
				<Link to='/implanon'>
          <img
            src='src/images/implant.png'
            alt='Implanon'
            className={styles.implanonImage}
          />
					</Link>
          <p className={styles.optionName}>IMPLANON</p>
        </div>


				<div className={styles.optionItem}>
				<Link to='/condoms'>
          <img
            src='src/images/condoms.png'
            alt='Condoms'
            className={styles.condomImage}
          />
					</Link>
          <p className={styles.optionName}>CONDOMS</p>
        </div>
				

				<div className={styles.optionItem}>
				<Link to='/pills'>
          <img
            src='src/images/pills.png'
            alt='Pills'
            className={styles.pillsImage}
          />
					</Link>
          <p className={styles.optionName}>PILLS</p>
        </div>
      <div>
      <div>Source: Planned Parenthood</div>
      </div>
      </div>
    </>
  );
}

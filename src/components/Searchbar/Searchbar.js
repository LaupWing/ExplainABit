import React from 'react'
import classes from './Searchbar.module.css'
import Button from '../UI/Button/Button'
export default ()=>{
    const config = {
        placeholder: 'Searchterm...'
    }
    return (
        <form className={classes.Search}>
            <input type="text" placeholder={config.placeholder}>
            </input>
            <Button
                btnType='submit'
                clicked={()=>console.log('click')}
            >
                search
            </Button>
        </form>
    )
}
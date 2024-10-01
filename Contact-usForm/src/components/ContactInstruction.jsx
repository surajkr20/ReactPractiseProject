import styles from './ContactInstruction.module.css';
import React from 'react'

const ContactInstruction = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.head}`}>Contact us</h1>
        <p className='text-justify text-pretty'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quaerat fugit corporis similique optio. Fugit explicabo odit maiores hic dicta repudiandae quos, perspiciatis aut ullam quae eveniet praesentium mollitia nisi culpa nihil ipsa dolore placeat. Nisi provident minus quaerat ad!</p>
      </div>
    </>
  )
}

export default ContactInstruction;

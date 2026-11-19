import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
      <div className="md:px-20 my-5 p-5">
        <div className="text-center font-bold text-3xl my-5">Contact</div>
        <p className="text-justify">Have questions,feedback or need help finding the perfect book?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequuntur, numquam ipsa ipsum quam corporis! Nam, ipsam vitae. Tempore ipsum possimus molestiae porro ab. Doloremque, harum. Dignissimos eaque id laudantium!
        Nisi, nemo quidem repellat voluptatem impedit non cum fugit aliquam sed corrupti corporis maxime. Assumenda odit placeat ea? Perspiciatis quam itaque adipisci dolores provident! Quam temporibus sapiente nesciunt doloremque at.
        Enim porro quisquam, aspernatur, est dolorum tenetur iure quaerat eius, repellendus quod dolor nulla repellat aperiam adipisci labore iste dolore quo architecto consequuntur tempora doloremque. Repellat natus soluta voluptatum amet!
        Ipsam optio iste quisquam praesentium, obcaecati similique facere est error ipsa sunt, voluptatibus magni atque eum laborum, cupiditate rem pariatur veritatis a temporibus harum accusantium. Doloribus esse assumenda laudantium alias?
        Hic quis beatae a consequuntur deserunt eaque, laborum ullam. Doloremque similique quam accusamus blanditiis omnis explicabo consequatur suscipit, nisi quidem minima eligendi magni illo amet necessitatibus animi molestiae culpa temporibus!</p>
        <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaLocationPin/>
              </div>
              <p className='ms-5'>123 Main Street,Apt 48,Anytown, CA 91234</p>
          </div>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaPhone/>
              </div>
              <p className='ms-5'>+09878635497</p>
          </div>

          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaEnvelope/>
              </div>
              <p className='ms-5'>bookstore123@gmail.com</p>
          </div>

        </div>
        <div className="md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40">
          <div className='bg-gray-300 text-center p-5'>
            <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>
            <form>
              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
                </div>
                <div className='mb-5 mt-10'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2' />
                </div>
                <div className='mb-5 mt-10'>
                <textarea type="text" placeholder='Name' className='bg-white w-full p-2' />
                </div>
                <div className='my-5'>
                  <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane className='ms-2'/></button>
                </div>
                
            </form>
          </div>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.975217565078!2d76.34006767404067!3d10.018903590087408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065856277!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        </div>

        

      </div>
      <Footer/>
    </>
  )
}

export default Contact
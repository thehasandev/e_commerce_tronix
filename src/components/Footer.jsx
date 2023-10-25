import React from 'react'
import Section from "./Section"
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import FooterTop from "../assets/FooterTop.png"
import Logo from "../assets/logo.png"

function Footer() {
  return (
    <>
       <Section className="bg-primary py-[69px]">
           <Container>
              <Flex className="items-center gap-x-8">
                 <div className='w-1/12'>
                    <Image src={FooterTop}/>
                 </div>
                 <div className='w-5/12'>
                    <h2 className='font-mon mb-4 font-bold text-white text-5xl'>Join our newsletter now!</h2>
                    <p className='font-pop font-normal text-white text-small'>Register now and get our latest updates and promos.</p>
                 </div>
                 
                 <div className='w-4/12 relative'>
                      <input type="text" className='bg-white w-full px-8 py-8 rounded-[8px]'/>
                      <button className='px-8  py-4 bg-secondary  absolute top-1/2 -translate-y-1/2 right-6 rounded-[8px] text-white  '>
                        Join
                      </button>
                  </div>
              </Flex>
           </Container>
       </Section>

       <footer className='flex'>
        <Container>
          <div className='w-1/2'>
            <div className='w-1/2'>
               <Image src={Logo}/> 
               
            </div>
          </div>

          <div className='w-1/2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt a, corrupti incidunt veritatis autem ab vel ratione officia facere dolorum impedit mollitia illum optio perspiciatis velit minima aliquid rerum maxime eum quo laboriosam sapiente cumque. Ex voluptatem consequatur inventore fugit fugiat pariatur omnis dicta impedit id a reiciendis distinctio veritatis repellendus assumenda molestiae quae ab dolorem cum dolorum modi alias, sunt adipisci veniam. Nostrum, cum corrupti atque doloremque tenetur optio tempore eum adipisci similique culpa fuga amet voluptas maiores porro, incidunt voluptatem, recusandae odit fugit? Odit necessitatibus voluptatum assumenda iure voluptatem. Exercitationem optio repudiandae tenetur vitae ipsam sequi ratione.
          </div>

        </Container>
       </footer>
    </>
  )
}

export default Footer
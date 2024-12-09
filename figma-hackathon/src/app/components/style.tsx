
import Image from 'next/image';

export default function Style() {
  return (
    <div className="space-x-4">
     
      <div className='flex justify-center'>
        <Image
          src="/style.png"  
          alt="Style"      
          width={900}         
          height={1300}        
          className="object-cover" 
        />
      </div>
    <br />
    <br />
     {/* REVIEW  */}
      <div>
        <Image
          src="/review.png"  
          alt="Review"      
          width={5000}         
          height={300}       
          className="object-cover"  
        />
      </div>
    </div>
  );
}
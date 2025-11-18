import Image from "next/image";
import React from "react";
import mobile from '../../../public/images/mobile.png'
import { Form } from "@/components/ui/form";

function LoginComponent() {
  return (
    <section>
      <div>Mobile Gurus</div>
      <div className="flex justify-between items-center">
        <div className="w-[50vw]">
                <form>
                
                     
                </form>
        </div>
        <div className="w-[50vw] h-[100vh]">
          <Image src={mobile} alt="mobile repair"/>
        </div>
      </div>
    </section>
  );
}

export default LoginComponent;

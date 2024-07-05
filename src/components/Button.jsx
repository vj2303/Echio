import React from 'react';
import { cva } from 'class-variance-authority';

const Button = ({ bg, text, border, size, type, onClick, ...props }) => {
  return (
    <button type={type} onClick={onClick} className={buttonVariants({ bg, text, border, size })} {...props} />
  );
};

const buttonVariants = cva("flex items-center justify-center gap-[10px] text-[14px] py-[6px] px-[16px] font-medium rounded-[10px]", {
    variants : {
        text : {
            black : "text-[color:var(--black)]",
            seaGreen : "text-[color:var(--sea-green)]",
            white : "text-[color:var(--white)]",
        },
        border : {
            none : "border-none",
            seaGreen : "border-2 border-[color:var(--sea-green)]",
        },
        // size : {
        //     sm : "px-[24px]",
        //     md : "px-[30px]",
        //     lg : "px-[50px]"
        // },
        bg : {
            transparent : "bg-transparent",
            seaGreen : "bg-[color:var(--sea-green)]",
        }
    },
    defaultVariants : {
        text : "white",
        border : "none",
        bg : "seaGreen",
        // size : "md"
    }
});

export default Button;

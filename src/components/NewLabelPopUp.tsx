"use client"
import { Popover, Transition } from "@headlessui/react";
import { Fragment, Ref, forwardRef, useState } from "react";
import { LabelRadioGroup } from "./LabelRadioGroup";
import { tagColors } from "@/model/TagColors";

type Props = {
    className: string,
    elementType: Extract<keyof JSX.IntrinsicElements, 'li' | 'button' | 'div'>;
    children: React.ReactNode;
}

type Values<T> = T[keyof T];
type ObtainHTMLProps<T extends Values<JSX.IntrinsicElements>> = T extends React.DetailedHTMLProps<infer Props, HTMLElement> ? Props : never;
export type ButtonRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

const CustomComponent = forwardRef(
    <C extends React.ElementType>(props: Props, ref: ButtonRef<C>) => {
        const { className, children, elementType: Component, ...rest } = props;
        return (
            <Component className={className} ref={ref as Ref<ButtonRef<C>>} {...(rest as any)}>
                {children}
            </Component>
        );
    },
);

export const NewLabelPopUp = ({ className, elementType, children }: Props) => {

    const [labelColor, setLabelColor] = useState(0)

    const getTagColor = (id: number)=>{
        const tagColor = tagColors.find(x=> x.id === id);
        return tagColor;
    }
    return (
        <>
            <Popover as={CustomComponent} elementType={elementType} className={`relative`}>
                <Popover.Button className={className}>
                    {children}
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[304px] -translate-x-1/2 transform px-4 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="bg-white p-3">
                                <h3 className="py-1 px-8 text-center text-zinc-600 font-bold text-sm leading-10">Create label</h3>
                                <div className="-mx-3 p-8 bg-zinc-100 ">
                                    <span className={`max-w-56 ${getTagColor(labelColor)?.light} dark:${getTagColor(labelColor)?.dark} h-8 block mx-auto`}></span>
                                </div>
                                <p className="text-xs my-3">Title</p>
                                <input className="
                                hover:bg-zinc-100 border-zinc-300 border-solid border text-sm
                                shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                    type="text" />
                                <p className="text-xs my-3">Select a color</p>
                                <LabelRadioGroup idLabelColor={labelColor} setLabelColor={setLabelColor} />
                                <button className="bg-blue-600 text-white px-3 py-2 text-xs rounded">Create</button>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}


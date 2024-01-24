import { Example1, Example2, Flow } from '.'

export function Article() { 

    return (
        <div className="flex 
            flex-row
            justify-center
            align-center
            gap-10
            w-full 
            h-full
        ">
            <Flow />
            <div className="flex 
                flex-col 
                align-center
                justify-center
                gap-10
                w-1/2 h-auto
            ">
                <Example1 />
                <Example2 />
            </div>
        </div>
    )

}
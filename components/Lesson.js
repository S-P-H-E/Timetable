import { Progress } from "antd";

export default function Lesson({icon, message, lesson, duration}){
    return(
        <>
            <div className="w-[800px] flex flex-col items-center bg-[#191919] px-4 pt-4 rounded-2xl gap-3">
                <div className="w-full flex items-center gap-3">
                    <div className="bg-[#252525] w-fit h-fit p-4 rounded-full">
                        {icon}
                    </div>
                    <div>
                        <p className="text-[#9E9E9E]">{message}</p>
                        <h1 className="text-3xl">{lesson}</h1>
                    </div>
                    <div>
                        <h1></h1>
                    </div>
                </div>
                <Progress percent={duration} showInfo={false} strokeColor={"#F2CF00"}/>
            </div>
        </>
    )
}
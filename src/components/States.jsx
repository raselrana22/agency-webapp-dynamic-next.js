import stateList from "@/lib/api-request/stateList";

export default async function States() {
  const states = await stateList();
  console.log(states);

  return (
    <>
      <div className='h-[380px] flex items-center'>
        <div className='mx-[105px] h-[290px] flex items-center gap-[30px]'>
          <div className='stateCard shadow-lg flex items-center justify-center '>
            <div>
              <div className='w-[100px] h-[100px] bg-[#D7F5DC]'></div>
              <p className='flex justify-center'>{states.followers}</p>
              <p className='flex justify-center'>followers</p>
            </div>
          </div>

          <div className='stateCard shadow-lg flex items-center justify-center'>
            <div>
              <div className='w-[100px] h-[100px] bg-[#D7F5DC]'></div>
              <p className='flex justify-center'>{states.solved}</p>
              <p className='flex justify-center'>solved</p>
            </div>
          </div>

          <div className='stateCard shadow-lg flex items-center justify-center'>
            <div>
              <div className='w-[100px] h-[100px] bg-[#D7F5DC]'></div>
              <p className='flex justify-center'>{states.customers}</p>
              <p className='flex justify-center'>customers</p>
            </div>
          </div>

          <div className='stateCard shadow-lg flex items-center justify-center'>
            <div>
              <div className='w-[100px] h-[100px] bg-[#D7F5DC]'></div>
              <p className='flex justify-center'>{states.projects}</p>
              <p className='flex justify-center'>projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

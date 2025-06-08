import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchWorkspaces } from "../../store/slices/workspaceSlice";
import ContainerWrapper from "../ContainerWrapper";

const SpaceOverview: React.FC = () => {
  const dispatch = useAppDispatch();
  const { workspaces, loading, error } = useAppSelector(
    (state) => state.workspaces
  );
  console.log("workspaces", workspaces);
  useEffect(() => {
    dispatch(fetchWorkspaces());
  }, [dispatch]);

  return (
    // <ContainerWrapper>
    //   <div className="container mx-auto px-4">
    //     <div className="w-full md:w-[300px] h-[45px] text-2xl md:text-3xl my-6 flex items-center md:flex-none justify-between">
    //       <h2 className="font-bold">Our Space Overview</h2>
    //       <div className="md:hidden">
    //         <svg
    //           width="25"
    //           height="8"
    //           viewBox="0 0 25 8"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
    //             fill="#FFBB00"
    //           />
    //         </svg>
    //       </div>
    //     </div>

    //     {loading && <p>Loading workspaces...</p>}
    //     {error && <p className="text-red-500">Error: {error}</p>}

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {workspaces.map((workspace) => (
    //         <div
    //           key={workspace.id}
    //           className="border rounded-lg overflow-hidden shadow-sm"
    //         >
    //           <div className="flex justify-content-around p-4">
    //             <div className="text-xl font-bold mb-2 w-[100%]">
    //               {workspace.name}
    //             </div>
    //             <div className="w-12 h-12 border">HI</div>
    //           </div>
    //           <div className="h-48 bg-gray-200 flex items-center justify-center">
    //             <img
    //               src={`${workspace.images[0]}`}
    //               // src={`src/assets/static_assets/${workspace.images[0]}`}
    //               alt={workspace.name}
    //               className="w-full h-full object-cover"
    //             />
    //           </div>

    //           {/* <p className="text-gray-600 mb-2">{workspace.address}</p> */}
    //           <div className="flex justify-content-around  p-4">
    //             <div className="text-xl h-20 font-bold mb-2 border p-4 mx-3 w-[50%]">
    //               Starting at ₹{workspace.day_pass_price}/-
    //             </div>
    //             <div className="text-xl h-20 font-bold mb-2 border w-[50%]">
    //               HI
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </ContainerWrapper>
    <ContainerWrapper>
      <div className="container mx-auto px-4">
        {/* Title and Mobile Arrow */}
        <div className="w-full md:w-[300px] h-[45px] text-2xl md:text-3xl my-6 flex items-center md:flex-none justify-between">
          <h2 className="font-bold">Our Space Overview</h2>
          <div className="md:hidden">
            <svg
              width="25"
              height="8"
              viewBox="0 0 25 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                fill="#FFBB00"
              />
            </svg>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            // [
            //   {
            //     id: 1,
            //     name: "HSR Sector 6, Service Road",
            //     image: "/static_assets/space1.jpg",
            //   },
            //   {
            //     id: 2,
            //     name: "HSR Sector 3, 19th Main Road",
            //     image: "/static_assets/space2.jpg",
            //   },
            //   {
            //     id: 3,
            //     name: "HSR Sector 6, 5th main Road",
            //     image: "/static_assets/space3.jpg",
            //   },
            //   {
            //     id: 4,
            //     name: "HSR Sector -2, 27th main Road",
            //     image: "/static_assets/space4.jpg",
            //   },
            //   {
            //     id: 5,
            //     name: "HSR Sector 6, Service Road",
            //     image: "/static_assets/space5.jpg",
            //   },
            //   {
            //     id: 6,
            //     name: "HSR Sector -6, 5th main Road",
            //     image: "/static_assets/space6.jpg",
            //   },
            // ]
            workspaces?.map((workspace) => (
              <div
                key={workspace.id}
                className="border rounded-lg overflow-hidden shadow-sm bg-white px-2"
              >
                {/* Title & Icon */}
                <div className="flex justify-between items-center p-3">
                  <div className="text-sm w-3/4 font-semibold">
                    {workspace.name}
                  </div>
                  <div className="min-w-[60px] rounded-md bg-gray-200 flex items-center text-center justify-center">
                    <span
                      role="img"
                      aria-label="location"
                      className="px-4 py-2 flex flex-col items-center justify-content-center"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18C7.75909 18 6.58977 17.7648 5.49205 17.2943C4.39432 16.8239 3.43977 16.183 2.62841 15.3716C1.81705 14.5602 1.17614 13.6057 0.705682 12.508C0.235227 11.4102 0 10.2409 0 9C0 7.74545 0.235227 6.57273 0.705682 5.48182C1.17614 4.39091 1.81705 3.43977 2.62841 2.62841C3.43977 1.81705 4.39432 1.17614 5.49205 0.705682C6.58977 0.235227 7.75909 0 9 0C10.2545 0 11.4273 0.235227 12.5182 0.705682C13.6091 1.17614 14.5602 1.81705 15.3716 2.62841C16.183 3.43977 16.8239 4.39091 17.2943 5.48182C17.7648 6.57273 18 7.74545 18 9C18 10.2409 17.7648 11.4102 17.2943 12.508C16.8239 13.6057 16.183 14.5602 15.3716 15.3716C14.5602 16.183 13.6091 16.8239 12.5182 17.2943C11.4273 17.7648 10.2545 18 9 18ZM8.48864 15.3614C8.625 15.4977 8.78182 15.5659 8.95909 15.5659C9.13636 15.5659 9.29318 15.4977 9.42955 15.3614L15.3205 9.47045C15.4568 9.33409 15.525 9.17045 15.525 8.97955C15.525 8.78864 15.4568 8.625 15.3205 8.48864L9.42955 2.59773C9.29318 2.46136 9.13636 2.39318 8.95909 2.39318C8.78182 2.39318 8.625 2.46136 8.48864 2.59773L2.59773 8.48864C2.46136 8.625 2.39318 8.78864 2.39318 8.97955C2.39318 9.17045 2.46136 9.33409 2.59773 9.47045L8.48864 15.3614ZM5.70682 11.4341V8.16136C5.70682 7.91591 5.78182 7.71818 5.93182 7.56818C6.08182 7.41818 6.27955 7.34318 6.525 7.34318H9.92045L9.06136 6.44318L10.2068 5.29773L13.0705 8.16136L10.2068 11.025L9.06136 9.87955L9.92045 8.97955H7.34318V11.4341H5.70682ZM9 16.3636C11.0591 16.3636 12.8011 15.6511 14.2261 14.2261C15.6511 12.8011 16.3636 11.0591 16.3636 9C16.3636 6.94091 15.6511 5.19886 14.2261 3.77386C12.8011 2.34886 11.0591 1.63636 9 1.63636C6.94091 1.63636 5.19886 2.34886 3.77386 3.77386C2.34886 5.19886 1.63636 6.94091 1.63636 9C1.63636 11.0591 2.34886 12.8011 3.77386 14.2261C5.19886 15.6511 6.94091 16.3636 9 16.3636Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                      <div className="text-[10px] pt-1">6 Kms</div>
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="h-48 bg-gray-200">
                  <img
                    src={`${workspace.images[0]}`}
                    // src={`src/assets/static_assets/${workspace.images[0]}`}
                    alt={workspace.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Pricing */}
                <div className="flex justify-between p-4 gap-3">
                  <div className="text-xs bg-gray-100 border rounded-md p-2 w-1/2">
                    <p className="text-gray-500 font-medium text-[12px] md:text-[14px]">
                      Day Pass
                    </p>
                    <p className="text-black font-bold pt-1 text-18px md:text-[20px]">
                      ₹ 249 / Day
                    </p>
                  </div>
                  <div className="text-xs bg-yellow-400 border rounded-md p-2 w-1/2  relative">
                    {/* Black box positioned on top center, overlapping the border */}
                    <div className="w-[80px] h-[20px] text-white text-[10px] flex pt-[3px] item-center justify-center  bg-black rounded-sm absolute -top-2 left-1/2 transform -translate-x-1/2">
                      20% Discount
                    </div>

                    <p className="text-black font-medium mt-2">Bulk Pass</p>
                    <p className="text-black font-bold">₹ 2400 / 10 Days</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SpaceOverview;

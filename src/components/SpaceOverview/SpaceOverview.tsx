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
    // In a real app, you would dispatch an async thunk here to fetch data from API
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Our Space Overview</h2>

        {loading && <p>Loading workspaces...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={`${workspace.images[0]}`}
                  // src={`src/assets/static_assets/${workspace.images[0]}`}
                  alt={workspace.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{workspace.name}</h3>
                <p className="text-gray-600 mb-2">{workspace.address}</p>
                <p className="font-bold">
                  Starting at ₹{workspace.day_pass_price}/-
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SpaceOverview;

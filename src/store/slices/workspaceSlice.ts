import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Workspace } from '../../types/workspace';

interface WorkspaceState {
  workspaces: Workspace[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkspaceState = {
  workspaces: [],
  loading: false,
  error: null,
};

const workspaceSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    fetchWorkspacesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWorkspacesSuccess(state, action: PayloadAction<Workspace[]>) {
      state.workspaces = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchWorkspacesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWorkspacesStart,
  fetchWorkspacesSuccess,
  fetchWorkspacesFailure,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
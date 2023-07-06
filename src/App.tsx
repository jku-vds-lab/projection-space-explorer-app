import React from "react";

import "./App.css";
import {
  API,
  Application,
  BaseConfig,
  createRootReducer,
  DatasetType,
  PSEContextProvider,
  RootState,
  setDatasetEntriesAction
} from "projection-space-explorer";

export const DATASETCONFIG = [
  {
    display: "Chess: 190 Games",
    path: "datasets/chess/chess16k.csv",
    type: DatasetType.Chess,
  },
  {
    display: "Chess: 450 Games",
    path: "datasets/chess/chess40k.csv",
    type: DatasetType.Chess,
  },
  {
    display: "Chess: 450 Games (Groups)",
    path: "datasets/chess/chess40k_groups.json",
    type: DatasetType.Chess,
  },
  {
    display: "Chess: AlphaZero vs Stockfish",
    path: "datasets/chess/alphazero.csv",
    type: DatasetType.Chess,
  },
  {
    display: "Rubik: 1x2 Different Origins",
    path: "datasets/rubik/cube1x2_different_origins.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "Rubik: 1x2 Same Origins",
    path: "datasets/rubik/cube1x2.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "Rubik: 10x2 Different Origins",
    path: "datasets/rubik/cube10x2_different_origins.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "Rubik: 10x2 Same Origins",
    path: "datasets/rubik/cube10x2.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "Rubik: 100x2 Different Origins",
    path: "datasets/rubik/cube100x2_different_origins.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "Rubik: 100x2 Same Origins",
    path: "datasets/rubik/cube100x2.csv",
    type: DatasetType.Rubik,
  },
  {
    display: "NN: Rnd Weights",
    path: "datasets/neural/random_weights.csv",
    type: DatasetType.Neural,
  },
  {
    display: "NN: Rnd Confusion Matrix",
    path: "datasets/neural/random_confmat.csv",
    type: DatasetType.Neural,
  },
  {
    display: "NN: Weights",
    path: "datasets/neural/learning_weights.csv",
    type: DatasetType.Neural,
  },
  {
    display: "NN: Confusion Matrix",
    path: "datasets/neural/learning_confmat.csv",
    type: DatasetType.Neural,
  },
  {
    display: "Story: With Names",
    path: "datasets/story/withnames.csv",
    type: DatasetType.Story,
  },
  {
    display: "Story: No Duplicates",
    path: "datasets/story/stories_dup-del_p50_with-names.csv",
    type: DatasetType.Story,
  },
  {
    display: "Story: Test",
    path: "datasets/story/teststories.csv",
    type: DatasetType.Story,
  },
  {
    display: "Go: State features",
    path: "datasets/go/combined.csv",
    type: DatasetType.Go,
  },
  {
    display: "Go: Histogram features",
    path: "datasets/go/histogram.csv",
    type: DatasetType.Go,
  },
  {
    display: "Go: Move features (wavelet)",
    path: "datasets/go/move_wavelet.csv",
    type: DatasetType.Go,
  },
  {
    display: "Toy: Iris",
    path: "datasets/toy/iris.csv",
    type: DatasetType.None,
  },
  {
    display: "Toy: Story",
    path: "datasets/toy/toy.csv",
    type: DatasetType.None,
  },
  {
    display: "Penguins",
    path: "datasets/penguins/penguins_without_nan.csv",
    type: DatasetType.None,
  },
  {
    display: "Cohort: TCGA Sub-sampled",
    path: "datasets/coral/coral_subsampled_normalized_no_one_hot.json",
    type: DatasetType.Cohort_Analysis,
  },
  {
    display: "Cohort: TCGA Lung, Colorectal, and Pancreatic Cancer",
    path: "datasets/coral/coral_usecase_3TumorTypes_expression_normalized_no_one_hot.json",
    type: DatasetType.Cohort_Analysis,
  },
];

const api = new API<RootState>(null, createRootReducer({}));

api.store.dispatch(setDatasetEntriesAction(DATASETCONFIG));

const backendConfig: BaseConfig = {
  baseUrl: 'https://cime.caleydoapp.org'
};

export function CIMEApp() {
  return (
    <PSEContextProvider context={api}>
      <Application config={backendConfig}/>
    </PSEContextProvider>
  );
}

export default CIMEApp;

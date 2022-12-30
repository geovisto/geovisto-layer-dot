import { ILayerToolProps } from "geovisto";
import IDotLayerToolDimensions from "./IDotLayerToolDimensions";

type IDotLayerToolProps = ILayerToolProps & {
    dimensions?: IDotLayerToolDimensions;
};

export default IDotLayerToolProps;

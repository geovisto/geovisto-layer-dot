// Geovisto core
import {
    ILayerToolDefaults,
    IMap,
    IMapDataDomain,
    IMapDomainDimension,
    IMapFilterManager,
    IMapFilterOperation,
    IMapTypeDimension,
} from "geovisto";

import IDotLayerToolDimensions from "./IDotLayerToolDimensions";

/**
 * This interface provides functions which return the default state values.
 * 
 * @author Vladimir Korencik
 */
interface IDotLayerToolDefaults extends ILayerToolDefaults {
    getFiltersManager(): IMapFilterManager

    getDimensions(map?: IMap): IDotLayerToolDimensions;

    getLatitudeDimension(map?: IMap): IMapDomainDimension<IMapDataDomain>;

    getLongitudeDimension(map?: IMap): IMapDomainDimension<IMapDataDomain>;

    getCategoryDimension(map?: IMap): IMapDomainDimension<IMapDataDomain>;

    getCategoryColorOperationDimension(): IMapDomainDimension<IMapFilterOperation>;

    getCategoryColorValueDimension(): IMapTypeDimension<string>;

    getCategoryColorDimension(): IMapTypeDimension<string>;
}

export default IDotLayerToolDefaults;

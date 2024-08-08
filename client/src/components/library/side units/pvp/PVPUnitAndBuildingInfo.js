import React from "react";
import PVPUnitInfo from "./PVPUnitInfo";
import PVPBuildingInfo from "./PVPBuildingInfo";
import PVPHeroInfo from './PVPHeroInfo'

const PVPUnitAndBuildingInfo = ({ unit }) => (
    unit[1] === 'unit' ?
        <PVPUnitInfo unit={unit[0]} /> :
        (
            unit[1] === 'building' ?
                <PVPBuildingInfo unit={unit[0]} /> :
                <PVPHeroInfo unit={unit[0]} />
        )
)

export default PVPUnitAndBuildingInfo
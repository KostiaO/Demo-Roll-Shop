import React, { useState } from "react";
import RollCard from "../RollCard/RollCard";
import { RollBucket } from "../RollBucket/RollBucket"; 
import { RollType } from "../../types/RollType";

export const RollSection: React.FC = () => {
    const [selectedRolls, selectRoll] = useState<RollType[]>([]);
    const checkIfContain =  (name: string) => 
        selectedRolls.some(roll => roll.name === name)

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                {/*Roll*/}
                        <RollCard
                            selectRoll={selectRoll}
                            state={selectedRolls}
                            checkIfContain={checkIfContain}
                        />
                {/*Roll*/}
                    </div>
                </div>
                <RollBucket 
                    rollItems={selectedRolls}
                    selectRoll={selectRoll}
                />
            </div>
        </div>
    )   
}
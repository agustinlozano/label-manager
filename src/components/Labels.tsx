import { useEffect, useState } from "react";
import { getLabels } from "../services/getLabels";
import Label from "../types/label";
import styles from "./Labels.module.css";

const Labels = () => {
  const [specialties, setSpecialties] = useState<Label[]>([]);
  const [contracts, setContracts] = useState<Label[]>([]);
  const [phases, setPhases] = useState<Label[]>([]);
  const [others, setOthers] = useState<Label[]>([]);

  console.log(specialties)

  useEffect(() => {
    async function setLabels () {
      const { DATA: specialties } = await getLabels('01');
      const { DATA: phases } = await getLabels('02');
      const { DATA: contracts } = await getLabels('03');
      const { DATA: others } = await getLabels('27');
    
      specialties ? setSpecialties(specialties) : setSpecialties([]);
      phases ? setPhases(phases) : setPhases([]);
      contracts ? setContracts(contracts) : setContracts([]);
      others ? setOthers(others) : setOthers([]);
    }
    setLabels();
  }, [])

  return (
    <div className={styles.labels}>
      <div className={styles.specialties}>
        <h3>Specialties</h3>
        <ul>
          {specialties.length !== 0 ? (
            specialties.map((specialty) => <li key={specialty.key}>{specialty.label}</li>)
            ) : (
              <li>No specialties</li>
          )}
        </ul>
      </div>
      <div className={styles.phases}>
        <h3>Phases</h3>
        <ul>
          {phases.length !== 0 ? (
            phases.map((phase) => <li key={phase.key}>{phase.label}</li>)
          ) : (
            <li>No phases</li>
          )}
        </ul>
      </div>
      <div className={styles.contracts}>
        <h3>Contracts</h3>
        <ul>
          {contracts.length !== 0 ? (
            contracts.map((contract) => <li key={contract.key}>{contract.label}</li>)
          ) : (
            <li>No contracts</li>
          )}      
        </ul>
      </div>
      <div className={styles.other}>
        <h3>Other</h3>
        <ul>
          {others.length !== 0 ? (
            others.map((other) => <li key={other.key}>{other.label}</li>)
          ) : (
            <li>There isn't labels.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Labels;
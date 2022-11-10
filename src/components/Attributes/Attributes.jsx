import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { numberMask } from '../../utils/numberMask';
import { sum } from 'mathjs';
import { GlobalSum } from '../../Contexts/GlobalSum';

import '../../Styles/global.css';

export const Attributes = () => {

  const globalSum = useContext(GlobalSum)


  // Controlador Hook Form
  const {
    watch,
    register,
    setValue,
    getValues
  } = useForm({
    mode: "all",
    defaultValues: {
      "strength": "10",
      "dexterity": "10",
      "inteligence": "10",
      "vitality": "10",
      "hitPoints": "10",
      "will": "10",
      "perception": "10",
      "fatiguePoints": "10"
    }
  });

  // Soma dos pontos
  // const [attSum, setAttSum] = useState(0);
  useEffect(() => {
    globalSum.setAttSum(sum(
      strCost, 
      dexCost, 
      intCost, 
      hthCost,
      hpCost,
      willCost,
      perCost,
      fpCost
      ))
  }, [watch()]);

  // Atributos primários
  const [strCost, setStrCost] = useState();
  useEffect(() => {
    setStrCost((getValues("strength") - 10) * 10);
    setValue('strength', numberMask(watch('strength').replace(/[^0-9]/, '')))
  }, [watch('strength')]);

  const [dexCost, setDexCost] = useState();
  useEffect(() => {
    setDexCost((getValues("dexterity") - 10) * 20);
    setValue('dexterity', numberMask(watch('dexterity').replace(/[^0-9]/, '')))
  }, [watch('dexterity')]);

  const [intCost, setIntCost] = useState();
  useEffect(() => {
    setIntCost((getValues("inteligence") - 10) * 20);
    setValue('inteligence', numberMask(watch('inteligence').replace(/[^0-9]/, '')))
  }, [watch('inteligence')]);

  const [hthCost, setHthCost] = useState();
  useEffect(() => {
    setHthCost((getValues("vitality") - 10) * 10);
    setValue('vitality', numberMask(watch('vitality').replace(/[^0-9]/, '')))
  }, [watch('vitality')]);


  // Atributos secundários
  const [hpCost, setHpCost] = useState();
  useEffect(() => {
    setHpCost((getValues("hitPoints") - getValues("strength")) * 2);
    setValue('hitPoints', numberMask(watch('hitPoints').replace(/[^0-9]/, '')))
  }, [watch('hitPoints'), watch('strength')]);

  const [willCost, setWillCost] = useState();
  useEffect(() => {
    setWillCost((getValues("will") - getValues("inteligence")) * 5);
    setValue('will', numberMask(watch('will').replace(/[^0-9]/, '')))
  }, [watch('will'), watch('inteligence')]);
  
  const [perCost, setPerCost] = useState();
  useEffect(() => {
    setPerCost((getValues("perception") - getValues("inteligence")) * 5);
    setValue('perception', numberMask(watch('perception').replace(/[^0-9]/, '')))
  }, [watch('perception'), watch('inteligence')]);
  
  const [fpCost, setFpCost] = useState();
  useEffect(() => {
    setFpCost((getValues("fatiguePoints") - getValues("vitality")) * 3);
    setValue('fatiguePoints', numberMask(watch('fatiguePoints').replace(/[^0-9]/, '')))
  }, [watch('fatiguePoints'), watch('vitality')]);

  
  // Classe span
  const spanColor = (cost) => cost < 0 ? "red-text" : "";

  return (
    <>
      <main className="attributes">
        <section>
          <div className="att-row">
            <span>For</span>
            <input 
              type="text"
              maxLength={4}
              {...register("strength")}
            />
            <span className={spanColor(strCost)}>{strCost}</span>
          </div>
          <div className="att-row">
            <span>Des</span>
            <input 
              type="text"
              maxLength={4}
              {...register("dexterity")}
            />
            <span className={spanColor(dexCost)}>{dexCost}</span>
          </div>
          <div className="att-row">
            <span>Int</span>
            <input 
              type="text"
              maxLength={4}
              {...register("inteligence")}
            />
            <span className={spanColor(intCost)}>{intCost}</span>
          </div>
          <div className="att-row">
            <span>Vit</span>
            <input 
              type="text"
              maxLength={4}
              {...register("vitality")}
            />
            <span className={spanColor(hthCost)}>{hthCost}</span>
          </div>
        </section>

        <section>
          <div className="att-row">
            <span>PV</span>
            <input 
              type="text"
              maxLength={4}
              {...register("hitPoints")}
            />
            <span className={spanColor(hpCost)}>{hpCost}</span>
          </div>
          <div className="att-row">
            <span>Vont</span>
            <input 
              type="text"
              maxLength={4}
              {...register("will")}
            />
            <span className={spanColor(willCost)}>{willCost}</span>
          </div>
          <div className="att-row">
            <span>Per</span>
            <input 
              type="text"
              maxLength={4}
              {...register("perception")}
            />
            <span className={spanColor(perCost)}>{perCost}</span>
          </div>
          <div className="att-row">
            <span>PF</span>
            <input 
              type="text"
              maxLength={4}
              {...register("fatiguePoints")}
            />
            <span className={spanColor(fpCost)}>{fpCost}</span>
          </div>
        </section>
      </main>
    </>
  );
};

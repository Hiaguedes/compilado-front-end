import Button from './components/Button'
import ResetCss from './styles/resetCss'
import AppLayout from './styles/AppLayout'
import Tooltip from './components/Tooltip'
import lodash from 'lodash'

import React, { useRef, useEffect, useState } from 'react'

export type TooltipType = React.ReactElement;

function App() {

  const [tooltips, setTooltips] = useState<TooltipType[]>([] as unknown as TooltipType[]);
  const [numberOfTooltipCreated, setNumberOfTooltipCreated] = useState(0);
  const refs = useRef(tooltips);

  const removeTooltips = React.useCallback((element: TooltipType) => {
    setTimeout(() => {
      if(!element) return;
      if(tooltips.length === 0) return;
  
      console.log('tooltips atuais', tooltips)
  
      const updatedArray = tooltips.filter((tooltip) => element.props?.parentKey === tooltip.props?.parentKey)
  
      console.log(updatedArray, 'array filtrado')
      refs.current = updatedArray;
      setTooltips(updatedArray);
    }, 1000)

  }, [tooltips])

  const updateTooltips = React.useCallback(() => {
    const updatedArr = [
      ...tooltips, 
      <Tooltip 
        key={numberOfTooltipCreated} 
        parentKey={numberOfTooltipCreated}
        index={refs.current.length} 
        removeTooltip={(element) => removeTooltips(element)}
        time={
          {
            duration: 2,
          }
        }
      />
    ]
    refs.current = updatedArr;
    setTooltips(updatedArr);
    setNumberOfTooltipCreated(prevValue => prevValue + 1)
  }, [tooltips])

  return (
    <>
      <ResetCss />
      <AppLayout>
        <>
        {
          tooltips.map((element, index) => element)
        }
        </>
        <Button 
          title='Hover Me' 
          onMouseEnter={
            () => {
              updateTooltips();
            }
          } />
      </AppLayout>
    </>
  )
}

export default App

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Label } from '../label';
import { Switch } from '../switch';

const PlaygroundSwitch: React.FC = () => {
  const searchParams = useSearchParams();
  const [playgroundMode, setPlaygroundMode] = useState(false);

  useEffect(() => {
    const isPlayground = searchParams.get('isPlayground') === 'true';
    setPlaygroundMode(isPlayground);
  }, [searchParams]); // Dependency on searchParams

  const updatePlaygroundQueryParam = (checked: boolean) => {
    const url = new URL(window.location.href);
    if (checked) {
      url.searchParams.set('isPlayground', 'true');
    } else {
      url.searchParams.delete('isPlayground');
    }
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <div className='flex items-center gap-2'>
      <Switch
        id='playground-mode'
        checked={playgroundMode}
        onCheckedChange={(checked) => {
          updatePlaygroundQueryParam(checked);
        }}
      />
      <Label htmlFor='playground-mode'>Playground</Label>
    </div>
  );
};

export default PlaygroundSwitch;

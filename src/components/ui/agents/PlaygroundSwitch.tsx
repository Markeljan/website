import React, { useEffect, useState } from 'react';
import { Switch } from '../switch';
import { Label } from '../label';

const PlaygroundSwitch: React.FC = () => {
  const [playgroundMode, setPlaygroundMode] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const isPlayground = url.searchParams.get('isPlayground') === 'true';
    setPlaygroundMode(isPlayground);
  }, []);

  const updatePlaygroundQueryParam = (checked: boolean) => {
    const url = new URL(window.location.href);
    if (checked) {
      url.searchParams.set('isPlayground', 'true');
    } else {
      url.searchParams.delete('isPlayground');
    }
    window.history.replaceState({}, '', url.toString());
    setPlaygroundMode(checked);
  };

  return (
    <div className='flex items-center gap-2'>
      <Switch
        id='playground-mode'
        checked={playgroundMode}
        onCheckedChange={(checked) => {
          updatePlaygroundQueryParam(checked);
        }}
        onClick={(e) => e.stopPropagation()}
      />
      <Label htmlFor='playground-mode'>Playground</Label>
    </div>
  );
};

export default PlaygroundSwitch;

import React from 'react';
import {Emoji} from '../commons/Emoji';
import {getStyleForTopLevelComponent} from '../../core/utils/getStyleForTopLevelComponent';
import '../styles/emoji.css';
import '../styles/emojiDefaults.css';

interface EmojiPlaceholdersProps {
  code: number[];
  onEmojiClicked: (index: number) => void;
  className?: string;
}

export const EmojiPlaceholders = ({code, onEmojiClicked, className}: EmojiPlaceholdersProps) => {
  const placeholders = code.map((code: number, index: number) => (
    <li style={{margin: '10px'}} key={`emoji_placeholder_${index}`}  onClick={() => onEmojiClicked(index)} >
      <Emoji code={code}/>
    </li>
  ));

  return (
    <div className={getStyleForTopLevelComponent(className)}>
      <div className="universal-login-emoji">
        <ul>
          {placeholders}
        </ul>
      </div>
    </div>
  );
};
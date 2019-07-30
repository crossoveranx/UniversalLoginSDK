import React from 'react';
import {Emoji} from '../commons/Emoji';
import {getStyleForTopLevelComponent} from '../../core/utils/getStyleForTopLevelComponent';
import '../styles/emoji.css';
import '../styles/emojiDefaults.css';

interface EmojiPanelWithFakesProps {
  securityCodeWithFakes: number[];
  onEmojiClicked: (code: number) => void;
  className?: string;
}

export const EmojiPanelWithFakes = ({securityCodeWithFakes, onEmojiClicked, className}: EmojiPanelWithFakesProps) => {
  const emojis = securityCodeWithFakes.map((code: number, index: number) => (
    <li style={{margin: '10px'}} key={`securityCodeWithFakes_${index}`} onClick={() => onEmojiClicked(code)} >
      <Emoji code={code}/>
    </li>
  ));

  return (
    <div className={getStyleForTopLevelComponent(className)}>
      <p>Security code</p>
      <div className="universal-login-emoji">
        <ul>
          {emojis}
        </ul>
      </div>
    </div>
  );
};
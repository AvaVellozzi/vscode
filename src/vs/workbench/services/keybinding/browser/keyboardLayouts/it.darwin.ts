/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { KeyboardLayoutContribution } from 'vs/workbench/services/keybinding/browser/keyboardLayouts/_.contribution';
import { KeymapInfo } from 'vs/workbench/services/keybinding/common/keymapInfo';

KeyboardLayoutContribution.INSTANCE.registerKeyboardLayout(new KeymapInfo(
	{ id: 'com.apple.keylayout.Italian-Pro', lang: 'it', localizedName: 'Italian' },
	[],
	{
		KeyA: ['a', 'A', 'å', 'Å', 0],
		KeyB: ['b', 'B', '∫', 'Í', 0],
		KeyC: ['c', 'C', '©', 'Á', 0],
		KeyD: ['d', 'D', '∂', '˘', 0],
		KeyE: ['e', 'E', '€', 'È', 0],
		KeyF: ['f', 'F', 'ƒ', '˙', 0],
		KeyG: ['g', 'G', '∞', '˚', 0],
		KeyH: ['h', 'H', '∆', '¸', 0],
		KeyI: ['i', 'I', 'œ', 'Œ', 0],
		KeyJ: ['j', 'J', 'ª', '˝', 0],
		KeyK: ['k', 'K', 'º', '˛', 0],
		KeyL: ['l', 'L', '¬', 'ˇ', 0],
		KeyM: ['m', 'M', 'µ', 'Ú', 0],
		KeyN: ['n', 'N', '˜', 'Ó', 4],
		KeyO: ['o', 'O', 'ø', 'Ø', 0],
		KeyP: ['p', 'P', 'π', '∏', 0],
		KeyQ: ['q', 'Q', '„', '‚', 0],
		KeyR: ['r', 'R', '®', 'Ì', 0],
		KeyS: ['s', 'S', 'ß', '¯', 0],
		KeyT: ['t', 'T', '™', 'Ò', 0],
		KeyU: ['u', 'U', '¨', 'Ù', 4],
		KeyV: ['v', 'V', '√', 'É', 0],
		KeyW: ['w', 'W', 'Ω', 'À', 0],
		KeyX: ['x', 'X', '†', '‡', 0],
		KeyY: ['y', 'Y', 'æ', 'Æ', 0],
		KeyZ: ['z', 'Z', '∑', ' ', 0],
		Digit1: ['1', '!', '«', '»', 0],
		Digit2: ['2', '"', '“', '”', 0],
		Digit3: ['3', '£', '‘', '’', 0],
		Digit4: ['4', '$', '¥', '¢', 0],
		Digit5: ['5', '%', '~', '‰', 0],
		Digit6: ['6', '&', '‹', '›', 0],
		Digit7: ['7', '/', '÷', '⁄', 0],
		Digit8: ['8', '(', '´', '', 4],
		Digit9: ['9', ')', '`', ' ', 4],
		Digit0: ['0', '=', '≠', '≈', 0],
		Enter: [],
		Escape: [],
		Backspace: [],
		Tab: [],
		Space: [' ', ' ', ' ', ' ', 0],
		Minus: ['\'', '?', '¡', '¿', 0],
		Equal: ['ì', '^', 'ˆ', '±', 4],
		BracketLeft: ['è', 'é', '[', '{', 0],
		BracketRight: ['+', '*', ']', '}', 0],
		Backslash: ['ù', '§', '¶', '◊', 0],
		Semicolon: ['ò', 'ç', '@', 'Ç', 0],
		Quote: ['à', '°', '#', '∞', 0],
		Backquote: ['<', '>', '≤', '≥', 0],
		Comma: [',', ';', '…', ' ', 0],
		Period: ['.', ':', '•', '·', 0],
		Slash: ['-', '_', '–', '—', 0],
		CapsLock: [],
		F1: [],
		F2: [],
		F3: [],
		F4: [],
		F5: [],
		F6: [],
		F7: [],
		F8: [],
		F9: [],
		F10: [],
		F11: [],
		F12: [],
		Insert: [],
		Home: [],
		PageUp: [],
		Delete: [],
		End: [],
		PageDown: [],
		ArrowRight: [],
		ArrowLeft: [],
		ArrowDown: [],
		ArrowUp: [],
		NumLock: [],
		NumpadDivide: ['/', '/', '/', '/', 0],
		NumpadMultiply: ['*', '*', '*', '*', 0],
		NumpadSubtract: ['-', '-', '-', '-', 0],
		NumpadAdd: ['+', '+', '+', '+', 0],
		NumpadEnter: [],
		Numpad1: ['1', '1', '1', '1', 0],
		Numpad2: ['2', '2', '2', '2', 0],
		Numpad3: ['3', '3', '3', '3', 0],
		Numpad4: ['4', '4', '4', '4', 0],
		Numpad5: ['5', '5', '5', '5', 0],
		Numpad6: ['6', '6', '6', '6', 0],
		Numpad7: ['7', '7', '7', '7', 0],
		Numpad8: ['8', '8', '8', '8', 0],
		Numpad9: ['9', '9', '9', '9', 0],
		Numpad0: ['0', '0', '0', '0', 0],
		NumpadDecimal: [',', '.', ',', '.', 0],
		IntlBackslash: ['\\', '|', '`', 'ı', 0],
		ContextMenu: [],
		NumpadEqual: ['=', '=', '=', '=', 0],
		F13: [],
		F14: [],
		F15: [],
		F16: [],
		F17: [],
		F18: [],
		F19: [],
		F20: [],
		AudioVolumeMute: [],
		AudioVolumeUp: ['', '=', '', '=', 0],
		AudioVolumeDown: [],
		NumpadComma: [],
		IntlRo: [],
		KanaMode: [],
		IntlYen: [],
		ControlLeft: [],
		ShiftLeft: [],
		AltLeft: [],
		MetaLeft: [],
		ControlRight: [],
		ShiftRight: [],
		AltRight: [],
		MetaRight: []
	}
));
import GameSetup from './GameSetup.js';
import ShipPlacementHandler from './ShipPlacementHandler.js';
import TurnHandler from './TurnHandler.js';
import GameLogic from './GameLogic.js';

const AddLogic = () => {
    GameSetup();
    ShipPlacementHandler();
    TurnHandler();
    GameLogic();
}

export default AddLogic;
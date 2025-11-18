import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class ExpensiveComputer extends ComputerEssentialComponent{

   public async selectProcessor(value: string): Promise<string|null> {
      return await this.selectOption(value);
    }

    public async selectRAM(value: string): Promise<string|null> {
      return await this.selectOption(value);
    }
     
}
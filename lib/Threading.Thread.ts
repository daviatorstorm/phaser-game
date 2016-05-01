namespace Threading {
	export class Thread {
		private func: () => void;
		isComplete: boolean;
		Started: boolean;
		private FinishedCallback: () => void;
		
		constructor(func: () => void) {
			this.func = func;
			this.isComplete = false;
			this.Started = false;
		}
		
		SetFinishedCallback(func: () => void) {
			this.FinishedCallback = func;
		}
		
		Start() {
			setTimeout(() => {
				this.func();
				this.isComplete = true;
			});
			this.Started = true
			if(this.FinishedCallback != null) {
				this.FinishedCallback();
			}
		}
	}
}
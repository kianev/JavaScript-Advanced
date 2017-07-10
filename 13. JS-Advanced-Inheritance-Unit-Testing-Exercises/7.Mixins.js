function createComputerHierarchy() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer{
        constructor(manufacturer, proceccorSpeed, ram, hardDiskDrive){
            if(new.target === Computer){
                throw new Error("Cannot make an instance of abstract class Computer")
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = proceccorSpeed;
            this.ram = ram;
            this.hardDiskDrive = hardDiskDrive;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, proceccorSpeed, ram, hardDiskDrive, weight, color, battery){
            super(manufacturer, proceccorSpeed, ram, hardDiskDrive);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(newBattery){
            if(! (newBattery instanceof Battery)){
                throw new Error("not a valid Battery")
            }
            this._battery = newBattery;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, proceccorSpeed, ram, hardDiskDrive, keyboard, monitor){
            super(manufacturer, proceccorSpeed, ram, hardDiskDrive);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(newKeyboard){
            if(!(newKeyboard instanceof Keyboard)){
                throw new Error("not a valid Keyboard")
            }
            this._keyboard = newKeyboard;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(newMonitor) {
            if(!(newMonitor instanceof Monitor)) {
                throw new Error("not a valid Monitor")
            }
            this._monitor = newMonitor
        }
    }

    function createMixins() {
        function computerQualityMixin(classToExtend) {
            classToExtend.prototype.getQuality = function () {
                return (this.processorSpeed + this.ram + this.hardDiskDrive) / 3
            };
            classToExtend.prototype.isFast = function () {
                return this.processorSpeed > (ram / 4)
            };
            classToExtend.prototype.isRoomy = function () {
                return hardDiskSpace  > Math.floor(ram * processorSpeed);
            };
        }

        function styleMixin(classToExtend) {
            classToExtend.prototype.isFullSet = function () {
                return this.manufacturer == this.keyboard.manufacturer && this.manufacturer == this.monitor.manufacturer;
            };
            classToExtend.prototype.isClassy = function () {
                return this.battery.expectedLife >= 3 && (this.color == "Silver" || this.color == "Black") && this.weight < 3;
            };
        }


        return {
            computerQualityMixin,
            styleMixin
        }
    }


    return {Battery, Keyboard, Monitor, Computer, Laptop, Desktop}
}




export class User {
    private name: string;
    private userId: number;

    private static ERROR: string = "Имя пустое";
    public static ID: number = 0;

    constructor(name: string) {
        let resName = name.trim();
        if (resName !== "") {
            this.name = name;
        } else {
            throw new Error(User.ERROR);
        };
        User.ID++;
        this.userId = User.ID;
    };

    public getName(): string {
        return this.name;
    };

    public getUserId(): number {
        return this.userId;
    };
};